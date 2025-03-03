import Block from "../Block";
import withDragDrop from "../../wrappers/withDragDrop";
import withResize from "../../wrappers/withResize";
import provideForwardedRef from "../../wrappers/provideForwardedRef";

const EditableBlock = ((Comp) => {
  Comp = withResize(Comp);
  Comp = withDragDrop(Comp);
  Comp = provideForwardedRef(Comp);

  return Comp;
})(Block);

export default EditableBlock;
