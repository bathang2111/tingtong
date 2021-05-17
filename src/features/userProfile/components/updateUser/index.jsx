import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AuthApi from "../../../../api/authApi";
import { getUserInfo } from "../../userProfileSlide";
import * as SC from "./style";

const UpdateUser = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userprofile);

  const onSubmit = async (value) => {
    props.closePopup(false);
    const res = await AuthApi.UpdateUserInfo(value);
    dispatch(getUserInfo());
  };

  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
          zIndex: "100",
        },
      }}
      isOpen={props.toggle}
    >
      <SC.SubContainer onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ margin: "0" }}>Cập nhật tài khoản</h3>
        <SC.GroupI>
          <SC.Variable>Họ</SC.Variable>
          <SC.value value={userInfo.fullName}
            {...register("firstName", { required: true })}
            type="text"
          />
        </SC.GroupI>
        <SC.GroupI>
          <SC.Variable>Tên</SC.Variable>
          <SC.value type="text" {...register("lastName", { required: true })} />
        </SC.GroupI>
        <SC.GroupI>
          <SC.Variable>Địa chỉ</SC.Variable>

          <SC.value type="text" {...register("address", { required: true })} />
        </SC.GroupI>
        <SC.GroupI>
          <SC.Variable>Số điện thoại</SC.Variable>

          <SC.value
            type="number"
            {...register("phoneNumber", { required: true })}
          />
        </SC.GroupI>
        <SC.GroupBTN>
          <SC.Close onClick={() => props.closePopup(false)}>Đóng</SC.Close>
          <SC.Submit type="submit">Update</SC.Submit>
        </SC.GroupBTN>
      </SC.SubContainer>
    </SC.Container>
  );
};

export default UpdateUser;
