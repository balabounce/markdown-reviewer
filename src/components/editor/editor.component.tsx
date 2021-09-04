import React from "react";
import './editor.styles.scss';
import editorIcon from '../../assets/editor-icon.svg';
import scaleBtn from '../../assets/scale-icon.svg';

const Editor = () => {
    return (
        <div className="editor-block">
            <section className='title-bar'>
                <div className="window-logo">
                    <img src={editorIcon} alt='logo'/>
                </div>
                <p className='title'>Editor</p>
                <button className='scale'>
                    <img src={scaleBtn}  alt="scale" />
                </button>
            </section>
            <section className='editor-area'>
                <textarea name="editor" id="editor" cols={96} rows={37}></textarea>
            </section>
        </div>
    )
}

export default Editor;