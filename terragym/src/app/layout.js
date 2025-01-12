import 'app/globals.css'
export default function DashboardLayout({ children, }) {
  return ( 
    <html lang="en">
      <body>
      {/* UI DE LAYOUT */}
      <h1>navbar</h1>
      <p>contenido</p>
      <main>{children}</main>
      <p>fin contenido</p>
      <h1>footer</h1>

      </body>
    </html>
  )
}