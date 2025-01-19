import React from "react";
import { Link } from "react-router-dom";

const NewEvents = ({ text1 }) => {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "15px",
            background: "linear-gradient(135deg, rgb(0, 255, 13), #0056b3)",
            color: "#ffffff",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            maxWidth: "300px",
            margin: "20px auto",
            animation: "heartbeat 1.5s infinite",
        },
        link: {
            display: "inline-block",
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "white solid 3px",
            borderRadius: "25px",
            background: "rgba(255, 255, 255, 0.1)",
            transition: "background 0.3s ease, transform 0.3s ease",
        },
        linkHover: {
            background: "rgba(255, 255, 255, 0.3)",
            transform: "scale(1.05)",
        },
        containerHover: {
            transform: "translateY(-10px)",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
        },
    };

    const keyframes = `
        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
                background: linear-gradient(135deg, rgb(0, 255, 13), #0056b3);
            }
            50% {
                transform: scale(1.1);
                background: linear-gradient(135deg, #0056b3, rgb(0, 255, 13));
            }
        }
    `;

    const [hover, setHover] = React.useState(false);

    // Inject keyframes into the document
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <div
            style={{
                ...styles.container,
                ...(hover ? styles.containerHover : {}),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link
                to={text1}
                style={{
                    ...styles.link,
                    ...(hover ? styles.linkHover : {}),
                }}
            >
                Find New Events
            </Link>
        </div>
    );
};

export default NewEvents;
