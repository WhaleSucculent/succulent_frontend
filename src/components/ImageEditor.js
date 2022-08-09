import React, { useState } from 'react';
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';

function ImageEditor() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);
  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };
  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };
  return (
    <div>
      <button onClick={openImgEditor}>Open Filerobot image editor</button>
      {isImgEditorShown && (
        <FilerobotImageEditor
          source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
          onSave={(editedImageObject, designState) => console.log('saved', editedImageObject, designState)}
          onClose={closeImgEditor}
          annotationsCommon={{
            fill: '#ff0000'
          }}
          Text={{ text: 'Filerobot...' }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.TEXT} // or 'Text'
        />
      )}
    </div>
  );
}

export default ImageEditor;
