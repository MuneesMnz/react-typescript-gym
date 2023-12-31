import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
  setIsMenuToggle?: (value: boolean) => void
}

function Link({ page, selectedPage, setSelectedPage, setIsMenuToggle }: Props) {

  const lowercase = page.toLowerCase().replace(/ /g, "") as SelectedPage;


  return (
    <AnchorLink
      className={`${selectedPage === lowercase ? "text-primary-500" : "text-black "}
     transition duration-500 hover:text-primary-500`}
      href={`#${lowercase}`}
      onClick={() => {
        setSelectedPage(lowercase)
        if (setIsMenuToggle) {

          setIsMenuToggle(false)
        }
      }}>
      {page}
    </AnchorLink>
  )
}

export default Link