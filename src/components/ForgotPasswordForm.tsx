import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Input,
  FormControl,
  Link,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { IUserItem } from "../types/user";
import { login } from "../api/auth";

const inputStyle = {
  height: "100%",
  width: "100%",
  outline: "none",
  pl: "15px",
  borderRadius: "15px",
  border: "1px solid lightgrey",
  borderBottomWidth: "2px",
  fontSize: "17px",
  transition: "all 0.3s ease",
  "&::before, &::after": { display: "none" },
  "&:focus-within": { borderColor: "#1a75ff" },
};

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserItem>();
  const onSubmit = async (data: IUserItem) => {
    const response = await login(data);
    console.log(response);
  };

  const firstError = Object.values(errors)[0] as any;

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "50%",
      }}
    >
      <Box sx={{ height: "50px", width: "100%", marginTop: "20px" }}>
        <Input
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email không đúng định dạng",
            },
          })}
          sx={inputStyle}
          type="text"
          placeholder="Địa chỉ email"
        />
      </Box>

      {firstError && (
        <Typography
          color="error"
          fontSize="14px"
          sx={{ mt: 2, mb: 2, textAlign: "center" }}
        >
          {firstError.message as string}
        </Typography>
      )}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50px",
          borderRadius: "15px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, #003366, #004080, #0059b3, #0073e6)",
            zIndex: 0,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            position: "relative",
            textTransform: "none",
            zIndex: 1,
          }}
        >
          Nhận mã xác nhận
        </Button>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Typography variant="body1" component="span">
          Nhớ mật khẩu?{" "}
        </Typography>
        <Link href="/auth" sx={{ cursor: "pointer" }} underline="hover">
          Đăng nhập
        </Link>
      </Box>
    </FormControl>
  );
}
