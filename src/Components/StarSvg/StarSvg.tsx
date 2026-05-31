import type { ComponentProps } from "react"

interface StarSvgProps extends ComponentProps<"svg"> {}

const StarSvg = (props: StarSvgProps) => {

  return (
    <svg viewBox="0 0 512 512" {...props}>
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <g id="add" fill="currentColor" transform="translate(18.64 18.64)">
            <path
              id="Star"
              d="M237.36 344.172 97.843 429.388l37.933-159.021L11.617 164.012l162.96-13.065L237.36 0l62.782 150.947 162.96 13.065-124.158 106.355 37.933 159.021z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default StarSvg