import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/dashboard.module.scss";
import BaseSection from "@/components/BaseSection/BaseSection";
import Tabs from "@/components/Tabs/Tabs";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import ProductCard, { IProduct } from "@/components/ProductCard/ProductCard";
import axios from "axios";
import { toast } from "react-toastify";
import ImageInput from "@/components/ImageInput/ImageInput";
import placeholder from "../../public/assets/image_placeholder.svg";
const Dashboard = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [product, setProduct] = React.useState<IProduct>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    longDescription: "",
    properties: "",
  });
  const [productEdited, setProductEdited] = React.useState<IProduct>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    longDescription: "",
    properties: "",
  });

  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.id === "price" || e.target.id === "stock") {
      const value = e.target.value;
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      setProduct({ ...product, [e.target.id]: onlyNumbers });
    } else {
      setProduct({ ...product, [e.target.id]: e.target.value });
    }
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.id === "price" || e.target.id === "stock") {
      const value = e.target.value;
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      setProduct({ ...product, [e.target.id]: onlyNumbers });
    } else {
      setProduct({ ...product, [e.target.id]: e.target.value });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProduct = (product: IProduct) => {
    setIsEditing(true);
    setProductEdited(product);
  };

  const resetProduct = () => {
    setProduct({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      imageUrl: "",
      longDescription: "",
      properties: "",
    });
  };

  const handleProductUpload = async () => {
    setIsUploading(true);
    try {
      const response = await axios.post("http://localhost:5273/products", product);

      toast.success("Producto cargado correctamente");
      getProducts();
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsUploading(false);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5273/products");

      console.log(response.data, "get");
      setAllProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <BaseSection>
      <div className={styles.row}>
        <div className={styles.container}>
          <Tabs
            options={["Cargar nuevo Producto", "Editar Productos"]}
            selected={selected}
            setSelected={setSelected}
          />
          <div className={styles.forms}>
            {selected === 0 && (
              <div className={styles.form}>
                <Input
                  label={"Nombre del Producto"}
                  value={product.name}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"name"}
                />
                <Input
                  label={"Descripcion del Producto"}
                  value={product.description}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"description"}
                />
                <Input
                  label={"Descripcion completa del Producto"}
                  value={product.longDescription}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"longDescription"}
                  textArea
                />
                <Input
                  label={"Propiedades del Producto"}
                  value={product.properties}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"properties"}
                />
                <Input
                  label={"Precio del Producto"}
                  value={product.price}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"price"}
                />
                <Input
                  label={"Stock del Producto"}
                  value={product.stock}
                  setValue={handleInputChange}
                  placeholder={"Ingresar nombre del producto"}
                  id={"stock"}
                />
                <ImageInput selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                <div className={styles.buttons}>
                  <Button
                    text={"BORRAR FORMULARIO"}
                    type={"gold-s"}
                    size={"small"}
                    onClick={resetProduct}
                  />
                  <Button
                    text={"CARGAR PRODUCTO"}
                    type={"gold"}
                    size={"small"}
                    disabled={isUploading}
                    onClick={handleProductUpload}
                  />
                </div>
              </div>
            )}
            {selected === 1 && (
              <>
                {!isEditing && (
                  <div className={styles.list}>
                    {allProducts.map((product, index) => (
                      <ProductCard
                        key={index}
                        product={product}
                        buttonText="EDITAR"
                        onButtonClick={() => handleEditProduct(product)}
                      />
                    ))}
                  </div>
                )}
                {isEditing && (
                  <div className={styles.form}>
                    <Input
                      label={"Nombre del Producto"}
                      value={productEdited.name}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"name"}
                    />
                    <Input
                      label={"Descripcion del Producto"}
                      value={productEdited.description}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"description"}
                    />
                    <Input
                      label={"Descripcion completa del Producto"}
                      value={productEdited.longDescription}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"longDescription"}
                      textArea
                    />
                    <Input
                      label={"Propiedades del Producto"}
                      value={productEdited.properties}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"properties"}
                    />
                    <Input
                      label={"Precio del Producto"}
                      value={productEdited.price}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"price"}
                    />
                    <Input
                      label={"Stock del Producto"}
                      value={productEdited.stock}
                      setValue={handleEditInputChange}
                      placeholder={"Ingresar nombre del producto"}
                      id={"stock"}
                    />
                    <ImageInput selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                    <div className={styles.buttons}>
                      <Button
                        text={"CANCELAR"}
                        type={"gold-s"}
                        size={"small"}
                        onClick={() => setIsEditing(false)}
                      />
                      <Button
                        text={"GUARDAR PRODUCTO"}
                        type={"gold"}
                        size={"small"}
                        disabled={isUploading}
                        onClick={handleProductUpload}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {selected === 0 && (
          <div style={{ marginTop: "46px" }}>
            <ProductCard
              product={{
                ...product,
                imageUrl: selectedImage ? URL.createObjectURL(selectedImage) : placeholder,
              }}
              buttonText={"VER DETALLES"}
            />
          </div>
        )}
      </div>
    </BaseSection>
  );
};

export default Dashboard;
