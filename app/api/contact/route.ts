import { NextResponse } from "next/server"


export const runtime = "nodejs" // IMPORTANT pour service_role

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Pour l'instant, on log juste les données (en attendant la configuration DB)
    console.log("Nouveau Contact Reçu :", data)

    // TODO: Réactiver Supabase quand les variables d'environnement seront configurées sur Vercel
    /*
    const { error } = await supabaseAdmin.from("contact_messages").insert({
       ...
    })
    */

    return NextResponse.json({ ok: true, message: "Message reçu (Mode Simulation)" })
  } catch (err: any) {
    console.error("SERVER ERROR:", err)
    return NextResponse.json({ ok: false, message: "SERVER_ERROR" }, { status: 500 })
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 })
}
