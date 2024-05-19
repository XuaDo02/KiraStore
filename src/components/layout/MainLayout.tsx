import { ToastContainer } from "react-toastify";
import Footer from "./componentsLayout/Footer";
import Header from "./componentsLayout/Header";
import Banner from "./componentsLayout/Banner";
import { useEffect, useState } from "react";

function MainLayout({ children }: { children: any }): JSX.Element {
    const [showBanner, setShowBanner] = useState(true);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);

        const dfMessenger = document.createElement("df-messenger");
        dfMessenger.setAttribute("intent", "WELCOME");
        dfMessenger.setAttribute("chat-title", "KiraStore");
        dfMessenger.setAttribute("agent-id", "f5583693-86c0-4ecd-8b38-799daa27111c");
        dfMessenger.setAttribute("language-code", "en");
        document.body.appendChild(dfMessenger);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(dfMessenger);
        };
    }, []);

    return (
        <>
            <div className="w-full h-full">
                <Header />
                <Banner />
                <div className="bg-customWhite m-1 rounded-md w-screen max-h-full">
                    <div>{children}</div>
                </div>
                <Footer />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default MainLayout;
