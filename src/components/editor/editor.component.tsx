import React, {useState} from "react";
import './editor.styles.scss';
import editorIcon from '../../assets/editor-icon.svg';
import scaleBtn from '../../assets/scale-icon.svg';


type EditorProps = {
    updateApp: (winName: string, text?: string) => void,
    data: string
}

const Editor: React.FC<EditorProps> = (props) => {
    const [scaled, scale] = useState(false);

    const toWrite = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        props.updateApp('Neither', e.target.value);
    }

    if (scaled) {
        return (
            <div className="editor-block scaled">
                <section className='title-bar'>
                    <div className="window-logo">
                        <img src={editorIcon} alt='logo'/>
                    </div>
                    <p className='title'>Editor</p>
                    <button className='scale' onClick={() => {
                        if(!scaled) {
                            props.updateApp('Previewer')
                            scale(true);
                        } else {
                            props.updateApp('Neither');
                            scale(false);
                        }
                    }}>
                        <img src={scaleBtn}  alt="scale" />
                    </button>
                </section>
                <section className='editor-area'>
                    <textarea name="editor" id="editor" value={props.data} cols={96} rows={37}></textarea>
                </section>
            </div>
        ) 
    }

    return (
        <div className="editor-block">
            <section className='title-bar'>
                <div className="window-logo">
                    <img src={editorIcon} alt='logo'/>
                </div>
                <p className='title'>Editor</p>
                <button className='scale' onClick={() => {
                    if(!scaled) {
                        props.updateApp('Previewer')
                        scale(true)
                    } else {
                        props.updateApp('Neither');
                        scale(false);
                    }
                }}>
                    <img src={scaleBtn}  alt="scale" />
                </button>
            </section>
            <section className='editor-area'>
                <textarea name="editor" id="editor" value={props.data} cols={96} rows={37} onChange={(
                ev: React.ChangeEvent<HTMLTextAreaElement>,
            ): void => toWrite(ev)}></textarea>
            </section>
        </div>
    )
}

export default Editor;