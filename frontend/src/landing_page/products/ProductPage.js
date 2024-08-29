import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
    return (
        <>
        <Hero/>
        <LeftSection 
            imageURl={"media/images/kite.png"}
            proName={"kite"}
            proDes={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
            tryDemo={"Try demo"}
            learnMore={"Learn more"}
            googlePlay={"media/images/googlePlayBadge.svg"}
            appStore={"media/images/appstoreBadge.svg"}
        />
        <RightSection
            imageURL={"media/images/console.png"}
            proName={"Console"}
            proDes={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
            learnMore={"Learn more"}
        />
        <LeftSection 
            imageURl={"media/images/coin.png"}
            proName={"Coin"}
            proDes={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
            tryDemo={"Coin"}
            learnMore={"Learn more"}
            googlePlay={"media/images/googlePlayBadge.svg"}
            appStore={"media/images/appstoreBadge.svg"}
        />
        <RightSection
            imageURL={"media/images/kiteconnect.png"}
            proName={"Kite Connect API"}
            proDes={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
            learnMore={"Kite Connect"}
        />
        <Universe/>
        </>
    );
}

export default ProductPage;