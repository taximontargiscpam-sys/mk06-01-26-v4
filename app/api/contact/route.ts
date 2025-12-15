import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

export const runtime = "nodejs" // IMPORTANT pour service_role

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null
    const ua = req.headers.get("user-agent") ?? null

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      company: data.company,
      project: data.project,
      page_url: data.pageUrl || null,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
      ip,
      user_agent: ua,
    })

    if (error) {
      console.error("DB ERROR:", error)
      return NextResponse.json({ ok: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("SERVER ERROR:", err)
    return NextResponse.json({ ok: false, message: "SERVER_ERROR" }, { status: 500 })
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 })
}
