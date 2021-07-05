import path from 'path'
import createRollupConfig from '../../build/create-rollup-config'

const distDir = path.resolve(__dirname, './dist')
const name = 'wangEditor'

const configList = createRollupConfig({ distDir, name, outputUmdOnDev: true })

export default configList
