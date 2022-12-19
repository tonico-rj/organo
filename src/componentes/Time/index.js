import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const cssPri = { backgroundColor: props.corPrimaria }
    const cssSec = { backgroundColor: props.corSecundaria }

    return (
        //(props.colaboradores.lenght > 0) ?
        <section className='time' style={ cssSec }>
            <h3 style={ cssSec }>{props.nome}</h3>
            <div className='colaboradores'>
                {
                    props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)
                }
            </div>
        </section>
        //: ''
    )
}

export default Time 