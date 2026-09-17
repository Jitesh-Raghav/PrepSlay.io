import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizeFeedbackPayload, getConversationText } from './interviewFeedback.js';

test('normalizeFeedbackPayload strips markdown fences and keeps JSON feedback', () => {
  const raw = '```json\n{ "feedback": { "rating": { "technicalSkills": 8 }, "summary": ["Good work"] } }\n```';
  const parsed = normalizeFeedbackPayload(raw);

  assert.equal(parsed.feedback.rating.technicalSkills, 8);
  assert.deepEqual(parsed.feedback.summary, ['Good work']);
});

test('getConversationText converts conversation objects to a stable string', () => {
  const result = getConversationText({
    conversation: [
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'Hi there' },
    ],
  });

  assert.match(result, /Hello/);
  assert.match(result, /Hi there/);
});
