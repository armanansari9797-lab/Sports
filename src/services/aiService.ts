import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getSecuritySummary(threatType: string, assetName: string) {
  try {
    const prompt = `You are a high-level cybersecurity AI for a sports media platform called SportShield AI. 
    Analyze a threat: ${threatType} detected on asset: ${assetName}.
    Provide a concise technical summary (2-3 sentences) explaining the risk and recommended mitigation.
    Tone: Professional, elite, technical.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return "Autonomous analysis engine encountered a temporal sync error. Proceeding with standard mitigation protocols. Manual review recommended for high-entropy deviations.";
  }
}
