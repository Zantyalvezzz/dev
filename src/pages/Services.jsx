import SectionLayout from '../components/SectionLayout'
import InfoCard from '../components/InfoCard'

function Services() {
  return (
    <SectionLayout title="Nuestros Servicios">
      <p>ipsam assumenda dicta consequatur ut dolores rem earum, iure nesciunt vero. Cupiditate!</p>
      <div className="services-grid">
        <InfoCard
          image=""
          title="Desarrollo Web"
          description="ipsam assumenda dicta consequatur ut dolores rem earum, iure nesciunt vero. Cupiditate!"
          buttonProps={{
            text: "Ver más",
            color: "#5e691dff",
            size: 18
          }}
        />
        <InfoCard
          image=""
          title="Hosting y Dominio"
          description="ipsam assumenda dicta consequatur ut dolores rem earum, iure nesciunt vero. Cupiditate!"
          buttonProps={{
            text: "Ver más",
            color: "#49c2c4ff",
            size: 18
          }}
        />
        <InfoCard
          image=""
          title="Estrategias de Marketing"
          description="ipsam assumenda dicta consequatur ut dolores rem earum, iure nesciunt vero. Cupiditate!"
          buttonProps={{
            text: "Ver más",
            color: "#e33225ff",
            size: 18
          }}
        />
      </div>
    </SectionLayout>
  )
}
export default Services
