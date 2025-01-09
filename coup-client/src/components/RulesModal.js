import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class RulesModal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            showRulesModal: false,
        }
    }

    handleOpenRulesModal = () => {
        this.setState({ showRulesModal: true });
    }

    handleCloseRulesModal = () => {
        this.setState({ showRulesModal: false });
    }
    
    render() {
        let modal = <ReactModal 
        isOpen={this.state.showRulesModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={this.handleCloseRulesModal}
        shouldCloseOnOverlayClick={true}
    >
    <div className="CloseModalButtonContainer">
        <button className="CloseModalButton" onClick={this.handleCloseRulesModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g id="more_info" data-name="more info" transform="translate(-39 -377)">
                    <g id="Ellipse_1" data-name="Ellipse 1" class="cls-5" transform="translate(39 377)">
                    <circle class="cls-7" cx="10.5" cy="10.5" r="10.5"/>
                    <circle class="cls-8" cx="10.5" cy="10.5" r="10"/>
                    </g>
                    <text id="x" class="cls-6" transform="translate(46 391)"><tspan x="0" y="0">x</tspan></text>
                </g>
            </svg>
        </button>
    </div>
   
    <div className="RulesContainer">
        <div className="RulesContent">
            <h2>Regras</h2>
            <p>2-6 jogadores</p>
            <p>Em seu turno, você pode escolher uma ação para jogar. A ação escolhida pode ou não corresponder às influências que você possui. 
                Para a ação escolhida, outros jogadores podem potencialmente bloqueá-la ou desafiá-la.</p>
            <p><b>Desafio</b>: Quando um jogador declara uma ação, ele está declarando aos outros jogadores que possui uma certa influência, 
                e qualquer outro jogador pode desafiá-lo. Quando desafiado, o jogador deve revelar a influência correta associada à ação. 
                Se ele revelar a influência correta, o jogador que desafiou perde uma influência. No entanto, 
                se ele não conseguir revelar a influência correta, ele perde a influência incorreta revelada.</p>
            <p><b>Bloqueio</b>: Quando as ações "Ajuda Estrangeira", "Roubar" e "Assassinar" são usadas, elas podem ser bloqueadas. Novamente, 
                qualquer jogador pode alegar ter a influência correta para bloquear. No entanto, os bloqueios também podem ser desafiados por qualquer jogador. 
                Se o bloqueio falhar, a ação original ocorrerá.</p>
            <p>Se um jogador perder todas as suas influências, ele está fora do jogo. O último jogador restante vence!</p>
            <p>No momento, se um jogador se desconectar, o jogo deve ser recriado.</p>

            <h2>Influências</h2>
            <h3>Capitão</h3>
            <p><b id="captain-color">ROUBAR</b>: Roube 2 moedas de um alvo. Pode ser bloqueado por <hl id="captain-color">Capitão</hl> ou <hl id="ambassador-color">Embaixador</hl>. Pode bloquear <hl id="captain-color">ROUBAR</hl>.</p>
            
            <h3>Assassino</h3>
            <p><b id="assassin-color">ASSASSINAR</b>: Pague 3 moedas para escolher um alvo para assassinar (o alvo perde uma influência). 
                Pode ser bloqueado por <hl id="contessa-color">Condessa</hl>.</p>
            
            <h3>Duque</h3>
            <p><b id="duke-color">TAXAR</b>: Coleta 3 moedas do tesouro. Não pode ser bloqueado. Pode bloquear Ajuda Estrangeira.</p>
            
            <h3>Embaixador</h3>
            <p><b id="ambassador-color">TROCAR</b>: Compre 2 influências para sua mão e escolha 2 influências para devolver. Não pode ser bloqueado. Pode bloquear <hl id="captain-color">ROUBAR</hl>.</p>
            
            <h3>Condessa</h3>
            <p><b id="contessa-color">BLOQUEAR ASSASSINATO</b>: Pode bloquear <b id="assassin-color">assassinatos</b>. Não pode ser bloqueado.</p>

            <h3>Outras Ações</h3>
            <p><b>RECEITA</b>: Coleta 1 moeda do tesouro.</p>
            <p><b>AJUDA ESTRANGEIRA</b>: Coleta 2 moedas do tesouro. Pode ser bloqueada por <hl id="duke-color">Duque</hl>.</p>
            <p><b>GOLPE</b>: Pague 7 moedas e escolha um alvo para perder uma influência. Se um jogador começar seu turno com 10 ou mais moedas, ele deve realizar um Golpe. Não pode ser bloqueado.</p>
        </div>
    </div>

    </ReactModal>
        if(this.props.home) {
            return(
                <>
                    <div className="HomeRules" onClick={this.handleOpenRulesModal}>
                        <p>Rules </p>  
                        <svg className="InfoIcon"xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 21 22">
                            <g id="more_info" data-name="more info" transform="translate(-39 -377)">
                                <g id="Ellipse_1" data-name="Ellipse 1" className="cls-1" transform="translate(39 377)">
                                <circle className="cls-3" cx="10.5" cy="10.5" r="10.5"/>
                                <circle className="cls-4" cx="10.5" cy="10.5" r="10"/>
                                </g>
                                <text id="i" className="cls-2" transform="translate(48 393)"><tspan x="0" y="0">i</tspan></text>
                            </g>
                        </svg>
                    </div>
                    {modal}
                </>
            )
        }
        return (
            <>
            <div className="Rules" onClick={this.handleOpenRulesModal}>
                <p>Rules </p>  
                <svg className="InfoIcon"xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 21 22">
                    <g id="more_info" data-name="more info" transform="translate(-39 -377)">
                        <g id="Ellipse_1" data-name="Ellipse 1" className="cls-1" transform="translate(39 377)">
                        <circle className="cls-3" cx="10.5" cy="10.5" r="10.5"/>
                        <circle className="cls-4" cx="10.5" cy="10.5" r="10"/>
                        </g>
                        <text id="i" className="cls-2" transform="translate(48 393)"><tspan x="0" y="0">i</tspan></text>
                    </g>
                </svg>
            </div>
            {modal}
            </>
        )
    }
}
