import InfoCard from "./InfoCard"
import img1 from "../assets/react.png"
import img2 from "../assets/hosting.png"

function ServicesPreview() {
    return (
        <div className="services-preview">
            <h2>¿que ofrecemos?</h2>
            <div className="services-container">
                <InfoCard
                className="service-card-grid"
                    image={img1}
                    title="Desarrollo Web"
                    description= "loremasdasndiuabdiuasbdisadisadnisaasdasdadadadsasdadasdasdasdadadsadasdadasdadsas"
                    buttonProps={{
                        text: "Ver más",
                        color: "#5e691dff",
                        size: 18
                    }}
                />
                <InfoCard
                className="service-card-grid"
                    image={img2}
                    title="Hosting y Dominio"
                    description="Alojamiento web y registro de dominios."
                    buttonProps={{
                        text: "Ver más",
                        color: "#49c2c4ff",
                        size: 18
                    }}
                />
                <InfoCard
                className="service-card-grid"
                    image=""
                    title="que mas?"
                    description="Estrategias para aumentar tu presencia online."
                    buttonProps={{
                        text: "Ver más",
                        color: "#e33225ff",
                        size: 18
                    }}
                />
            </div>

        </div>
    )
}

export default ServicesPreview