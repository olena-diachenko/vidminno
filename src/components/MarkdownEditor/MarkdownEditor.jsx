import { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from 'rsuite';
import styles from './style.module.scss';

const MarkdownEditor = props => {
    const divRef = useRef();
    const editorRef = useRef(null);

    useEffect(() => {
        editorRef.current = new Editor({
            el: divRef.current,
            hideModeSwitch: true,
        });
    }, []);

    useEffect(
        () => () => {
            if (editorRef.current) {
                editorRef.current.removeHook('change');
                editorRef.current = null;
            }
        },
        []
    );

    const handleSend = () => {
        if (props.onSend) {
            const content = editorRef.current.getMarkdown();
            props.onSend(content);
            editorRef.current.setMarkdown('');
        }
    };

    return (
        <>
            <div ref={divRef} className={styles.markdown}></div>
            <Button
                className={styles.markdown__button}
                appearance="primary"
                size="lg"
                onClick={handleSend}
            >
                Send
            </Button>
        </>
    );
};

export default MarkdownEditor;
