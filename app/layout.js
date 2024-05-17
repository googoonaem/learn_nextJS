import "../styles/global.css";
import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s ::: Next Movies",
    default: "Loading..."
  },
  description: 'The Best Movies on the best framework.',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
