
function SectionLayout({ title, children }) {
    return (
            <div className="section-layout">
                <h2>{title}</h2>
                <div className="sl-content">
                    {children}
                </div>
            </div>
    );
}

export default SectionLayout