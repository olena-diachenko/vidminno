import { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Button } from 'rsuite';
import { useSelector } from 'react-redux';
import styles from './style.module.scss';

const MarkdownEditor = props => {
    const divRef = useRef();
    const editorRef = useRef(null);
    const theme = useSelector(state => state.theme.theme);

    useEffect(() => {
        editorRef.current = new Editor({
            el: divRef.current,
            hideModeSwitch: true,
            theme,
        });

        return () => {
            if (editorRef.current) {
                editorRef.current.removeHook('change');
                editorRef.current = null;
            }
        };
    }, [theme]);

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
