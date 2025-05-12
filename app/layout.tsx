import type React from "react"
import "./globals.css"

export const metadata = {
  title: "CRBR Investimentos - Excluir Conta",
  description: "Instruções para excluir sua conta na CRBR Investimentos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
