import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // 1. Henter spørsmålet fra nettsiden
        const { prompt } = await req.json();

        // 2. Henter nøkkelen og sjekker at den faktisk finnes (dette gjør TypeScript fornøyd)
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error("Kritisk feil: API-nøkkel mangler i miljøvariablene.");
            return NextResponse.json({ error: "Serverfeil: Mangler konfigurasjon" }, { status: 500 });
        }

        // 3. Kobler til Google Gemini
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // 4. Ber om svar fra AI-en
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // 5. Sender svaret tilbake
        return NextResponse.json({ text: responseText });

    } catch (error) {
        console.error("Feil med AI-en:", error);
        return NextResponse.json({ error: "Kunne ikke hente svar fra AI" }, { status: 500 });
    }
}