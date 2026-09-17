export function getConversationText(conversation) {
  if (!conversation) return '';

  if (typeof conversation === 'string') return conversation.trim();

  if (Array.isArray(conversation)) {
    return conversation
      .map((item) => {
        const role = item?.role || item?.speaker || 'message';
        const text = typeof item?.content === 'string'
          ? item.content
          : typeof item?.text === 'string'
            ? item.text
            : JSON.stringify(item?.content ?? item ?? '');

        return `[${role}] ${text}`;
      })
      .join('\n');
  }

  if (typeof conversation === 'object') {
    if (Array.isArray(conversation.conversation)) return getConversationText(conversation.conversation);
    if (typeof conversation.transcript === 'string') return conversation.transcript;
    if (typeof conversation.text === 'string') return conversation.text;
    return JSON.stringify(conversation);
  }

  return String(conversation).trim();
}

function stripCodeFences(raw) {
  if (typeof raw !== 'string') return raw;
  return raw
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```\s*$/i, '')
    .trim();
}

function normalizeSummary(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];

  const text = String(value).trim();
  if (!text) return [];

  return text
    .split(/\n|\.\s+(?=[A-Z])/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3);
}

function normalizeObject(raw) {
  const payload = raw?.feedback ?? raw ?? {};
  const rating = payload.rating ?? {};

  return {
    feedback: {
      rating: {
        technicalSkills: Number(rating.technicalSkills ?? rating.technical_skills ?? 0),
        communication: Number(rating.communication ?? 0),
        problemSolving: Number(rating.problemSolving ?? rating.problem_solving ?? 0),
        experience: Number(rating.experience ?? rating.experince ?? 0),
        totalRating: Number(rating.totalRating ?? rating.total_rating ?? 0),
      },
      summary: normalizeSummary(payload.summary ?? payload.summery ?? payload.summaryText ?? ''),
      recommendation: Boolean(payload.recommendation ?? payload.recommended ?? false),
      recommendationMsg: payload.recommendationMsg ?? payload.recommendation_msg ?? '',
    },
  };
}

export function normalizeFeedbackPayload(raw) {
  if (!raw) {
    return {
      feedback: {
        rating: {
          technicalSkills: 0,
          communication: 0,
          problemSolving: 0,
          experience: 0,
          totalRating: 0,
        },
        summary: [],
        recommendation: false,
        recommendationMsg: '',
      },
    };
  }

  if (typeof raw === 'object') {
    if (typeof raw.content === 'string') {
      return normalizeFeedbackPayload(raw.content);
    }

    if (typeof raw.message?.content === 'string') {
      return normalizeFeedbackPayload(raw.message.content);
    }

    return normalizeObject(raw);
  }

  if (typeof raw === 'string') {
    const cleaned = stripCodeFences(raw);

    try {
      return normalizeObject(JSON.parse(cleaned));
    } catch (error) {
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) {
        return normalizeObject({ feedback: {} });
      }

      try {
        return normalizeObject(JSON.parse(match[0]));
      } catch {
        return normalizeObject({ feedback: {} });
      }
    }
  }

  return normalizeObject(raw);
}
