// export default async function handler(req, res) {
//   try {
//     const response = await fetch("https://api.play.ht/api/v2/voices", {
//       headers: {
//         "X-USER-ID": "OCv2uRsCPAUcADurZ67ZT1DViAH3",
//         "Authorization": "ak-88726a4214f5417bac670fb0cc4beddd",
//       },
//     });

//     if (!response.ok) {
//       return res.status(response.status).json({ error: "Failed to fetch voices" });
//     }

//     const voices = await response.json();
//     res.status(200).json(voices);
//   } catch (error) {
//     console.error("Server Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// }

// app/api/voices/route.js
export async function GET() {
  try {
    const response = await fetch("https://api.play.ht/api/v1/voices", {
      headers: {
         "X-USER-ID": "",
        Authorization: "",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch voices" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}


//   async function fetchVoices() {
//       try {
//         const res = await fetch("https://api.play.ht/api/v2/voices", {
//           headers: {
//             "X-USER-ID": "OCv2uRsCPAUcADurZ67ZT1DViAH3",
//             "Authorization": "ak-88726a4214f5417bac670fb0cc4beddd"
//           }
//         });
    
//         if (!res.ok) {
//           throw new Error("Failed to fetch voices: " + res.status);
//         }
    
//         const voices = await res.json();
//         console.log("looking for ricco", voices);
//       } catch (err) {
//         console.error("Error:", err.message);
//       }
//     }
    
//     // Call the function
//     fetchVoices();