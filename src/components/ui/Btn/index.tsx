import "./Btn.css";

export default function Btn() {
    return (
      <div className="btbContainer">
   
         <a href="https://wa.me/+5515976029714?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento." target="_blank"  className="btn">
                
                <span className="btnText ">Falar com a Avuá </span> 
                <span className="btnIcon">                
                  <svg 
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1859_442)">
                    <path
                      d="M1.62988 9.64136H22.1117"
                      // stroke="white"
                      strokeWidth="2.25803"
                      strokeMiterlimit="10"
                    /> 
                    <path
                      d="M13.1094 1.36353C13.1094 5.99249 17.1354 9.73758 22.1118 9.73758"
                      // stroke="white"
                      strokeWidth="2.25803"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M22.1704 9.92358C17.1942 9.92358 13.168 13.6687 13.168 18.2976"
                      // stroke="white"
                      strokeWidth="2.25803"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1859_442">
                      <rect
                        width="22.5803"
                        height="18.0642"
                        fill="white"
                        transform="translate(0.610352 0.561035)"
                      />
                    </clipPath>
                  </defs>
                  </svg>            
                </span>
         </a>
         <div className="blurred">
          <span className="blurtext"></span>
          <span className="bluricon"></span>
         </div>
      </div>
    )
}