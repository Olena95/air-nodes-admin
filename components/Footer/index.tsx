import React from "react";
import "./footer.scss";
import LogoFooter from "../icons/LogoFooter";
import LogoX from "../icons/LogoX";
import LogoDiscord from "../icons/LogoDiscord";
import Link from "next/link";
import FooterShapeLft from "../icons/shapes/FooterShapeLft";
import FooterShapeRght from "../icons/shapes/FooterShapeRght";
import MobFooterShapeLft from "../icons/mobileShapes/MobFooterShapeLft";
import MobFooterShapeRght from "../icons/mobileShapes/MobFooterShapeRght";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="hidden lg:block absolute bottom-0 left-0">
                <FooterShapeLft />
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0">
                <FooterShapeRght />
            </div>
            <div className="block lg:hidden absolute bottom-0 left-0">
                <MobFooterShapeLft />
            </div>
            <div className="block lg:hidden absolute bottom-0 right-0">
                <MobFooterShapeRght />
            </div>
            <div className="footer__logo-wrapper ">
                <LogoFooter />
                <div className="flex gap-5">
                    <Link href="https://twitter.com/?lang=uk" target="_blank">
                        <LogoX />
                    </Link>
                    <Link
                        href="https://discord.com/invite/nextjs"
                        target="_blank"
                    >
                        <LogoDiscord />{" "}
                    </Link>
                </div>
            </div>
            <div className="footer__link-wrapper ">
                <p className="footer__text ">{`© ${year} Copyright Air nodes | All Rights Reserved`}</p>
                <div className=" space-x-[65px]">
                    <Link className="footer__link" href="/">
                        Terms of use
                    </Link>
                    <Link className="footer__link" href="/">
                        Privacy policy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
