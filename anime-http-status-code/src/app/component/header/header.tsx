"use client"
import { HeaderConatainer } from "./styles";

const Header = ({ logo, text }: { logo: any; text: any }) => {
    return (
        <HeaderConatainer>
            <div>
            <img style={{width: "100px"}} src="/favicon.ico">
            </img> 
            </div>
            <div>
                {text}
            </div>
        </HeaderConatainer>
    );
};

export default Header;
