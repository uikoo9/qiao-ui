// react
import React, { useRef } from 'react';

// log
import { colorLog } from '../../util/log.js';

/**
 * upload
 * @returns
 */
export const Upload = (props) => {
  colorLog('qiao-ui/basic/upload: render');

  // ref
  const inputFileRef = useRef(null);

  // onchange
  const onChange = (e) => {
    // check props
    if (!props.post) {
      colorLog('qiao-ui/basic/upload: need props.post');
      return;
    }
    if (!props.uploadUrl) {
      colorLog('qiao-ui/basic/upload: need props.uploadUrl');
      return;
    }
    if (!props.uploadSuccess) {
      colorLog('qiao-ui/basic/upload: need props.uploadSuccess');
      return;
    }
    if (!props.uploadFail) {
      colorLog('qiao-ui/basic/upload: need props.uploadFail');
      return;
    }

    // check
    const files = e.target.files;
    if (!files || !files.length) {
      colorLog('qiao-ui/basic/upload: need files');
      return;
    }
    if (props.checkFiles && !props.checkFiles(files)) return;

    // form data
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // upload
    inputFileRef.current.value = '';
    props
      .post(props.uploadUrl, {
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        props.uploadSuccess(response);
      })
      .catch((error) => {
        props.uploadFail(error);
      });
  };

  return (
    <div className={props.divClassName}>
      <input type="file" multiple ref={inputFileRef} onChange={onChange} />
    </div>
  );
};
