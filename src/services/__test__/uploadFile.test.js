import axios from 'axios';
import { uploadFileApi, downloadTemplateApi } from '../UploadFile'

jest.mock('axios');

describe('HTTP services', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })
    it('should download api ', async () => {
        const res = {
            success: true,
            data: {
                message: "api get successful"
            }
        }
        axios.get.mockResolvedValue(res)
        const response = await downloadTemplateApi("testUrl")
        expect(response.success).toBe(false);
    });

    it('should download', async () => {
        axios.post.mockResolvedValue({
            success: true,
            data: {
                message: "api get successful"
            }
        })
        const response = await uploadFileApi("testUrl")
        expect(response.success).toBe(false);
    });
}
)