import React from "react";
import {ScreenContainer} from "@/components";
import {TextWithSubtitle} from "@/components/Texts/TextWithSubtitle";

const About: React.FC = () => {
    return (
        <ScreenContainer>
            <TextWithSubtitle Title={'About'} Subtitle={'This is project test to company AXS'}/>
        </ScreenContainer>
    )
}

export default About