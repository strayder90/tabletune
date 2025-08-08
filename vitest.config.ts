import {defineConfig} from 'vitest/config';
import {resolve} from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@/': resolve(__dirname, 'src/') + '/',
            '@modules/': resolve(__dirname, 'src/modules/') + '/',
            '@appComponents/': resolve(__dirname, 'src/modules/app/components/') + '/',
            '@constants/': resolve(__dirname, 'src/modules/app/constants/') + '/',
            '@utils/': resolve(__dirname, 'src/utils/') + '/'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'json'],
            thresholds: {
                lines: 90,
                functions: 90,
                branches: 90,
                statements: 90
            },
        }
    }
});
