import {
  TEMPLATE_UPLOAD,
  TEMPLATE_DOWNLOAD,
} from "../constants/endpoints";
import { ResponseProps } from "./request";
import { request } from "./request";
import { MetaInfo } from "../types/types";

export const TEMPLATE_UPLOAD_ENDPOINT = `${process.env.REACT_APP_API_GATEWAY_URL}${TEMPLATE_UPLOAD}`;
export const TEMPLATE_DOWNLOAD_ENDPOINNT = `${process.env.REACT_APP_API_GATEWAY_URL}${TEMPLATE_DOWNLOAD}`;

export const uploadFileApi = async (
  fileName: string,
  file: File,
  documentPath: string,
  meta?: MetaInfo
): Promise<{ success: boolean; message?: string; data?: any }> => {
  const blob = new Blob([file]);
  const fileOfBlob = new File([blob], `${fileName}`);
  const params = {
    documentName: fileName,
    file: fileOfBlob,
    documentPath: documentPath,
    documentDescription: "",
    metaInfo: JSON.stringify(meta),
  };

  const r: ResponseProps = (await request.postForm(
    `${TEMPLATE_UPLOAD_ENDPOINT}`,
    params
  )) as ResponseProps;
  if (r && r.success) {
    return { success: true, data: r.data, message: r.message };
  }
  return { success: false, data: {}, message: "" };
};

export const downloadTemplateApi = async (
  id: string
): Promise<{ success: boolean; message?: string; blobFile?: any }> => {
  const response = (await request.getBlob(
    `${TEMPLATE_DOWNLOAD_ENDPOINNT}/${id}`
  )) as ResponseProps;

  if (response && response.success) {
    return { success: true, blobFile: response.data };
  }

  return { success: false };
};
// export default {};
