import Swal, { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";
interface AlertType {
  title?: string;
  msg?: string;
  innerHtml?: string | HTMLElement;
  pos?: SweetAlertPosition;
  icon?: SweetAlertIcon;
}

class AlertHandler {
  defaultConfirm = "정말로 그렇게 하실건가요?";
  alertMessage = {
    sucessMsg: "성공적으로 등록되었습니다.",
    delMsg: "기록이 삭제되었습니다.",
    cancelMsg: "취소되었습니다."
  };

  onDefaultAlert(props?: AlertType) {
    Swal.fire({
      text: props?.msg || this.defaultConfirm,
      html: props?.innerHtml,
      position: props?.pos || "center",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "확인"
    });
  }
  onConfirm(props?: AlertType) {
    const swal = Swal.fire({
      text: props?.msg || this.defaultConfirm,
      html: props?.innerHtml,
      position: "top",
      icon: props?.icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      reverseButtons: true // 버튼 순서 거꾸로
    });
    return swal;
  }
  onToast(props?: AlertType) {
    const Toast = Swal.mixin({
      toast: true,
      position: props?.pos || "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: props?.icon || "success",
      text: props?.msg || "정상 처리되었습니다."
    });
  }
}

export const { alertMessage } = new AlertHandler();
export default new AlertHandler();
