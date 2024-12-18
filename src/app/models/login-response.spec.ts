import { LoginResponse } from './login-response';

describe('LoginResponse Interface', () => {
  it('should define the expected structure', () => {
    const response: LoginResponse = {
      USERNAME: 'john_doe',
      USUARIO_ID: '123456',
      API_KEY: 'your-api-key',
      RESPONSE: 'OK',
      MESSAGE: 'Login successful'
    };

    // Verificamos que todas las propiedades existan
    expect(response.USERNAME).toBeDefined();
    expect(response.USUARIO_ID).toBeDefined();
    expect(response.API_KEY).toBeDefined();
    expect(response.RESPONSE).toBeDefined();
    expect(response.MESSAGE).toBeDefined();

    // Verificamos que los valores sean correctos
    expect(response.USERNAME).toBe('john_doe');
    expect(response.USUARIO_ID).toBe('123456');
    expect(response.API_KEY).toBe('your-api-key');
    expect(response.RESPONSE).toBe('OK');
    expect(response.MESSAGE).toBe('Login successful');
  });
});