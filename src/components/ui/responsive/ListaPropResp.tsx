import styles from "./ResposiveStyles.module.css";

const ListaPropResp = () => {
    return (
        <div className={styles.listaRespActive}>
            <div className={`${styles.SlideLine} pointer`}></div>
            <div className="row g-0">
                <div className="col-12">
                    {/* <div className={`${styles.LRtitle1} mb-3`}>
                        Lista de Inmuebles
                    </div> */}
                    <div className={`${styles.LRtitle2}`}>
                        Se encontraron 37 resultados
                    </div>
                </div>
            </div>
            {/* empieza lista */}
            <div className={styles.ListContainer}>
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className={`${styles.cardLista} p-4`}>
                            <br /><br /><br /><br />
                            asdasdads
                            <br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaPropResp