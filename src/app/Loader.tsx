import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: 42 }}
            spin
          />
        }
      />
    </div>
  )
}

export default Loader
