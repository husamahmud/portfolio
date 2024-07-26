import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: 24 }}
            spin
          />
        }
      />
    </div>
  )
}

export default Loader
