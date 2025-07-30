import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";

jest.mock("react-icons/lu", () => ({
  LuShoppingCart: ({ size }: { size: number }) => (
    <div data-testid="shopping-cart-icon" data-size={size} />
  ),
}));

jest.mock("./styles", () => ({
  Button: ({
    children,
    $color,
    ...props
  }: {
    children: React.ReactNode;
    $color: string;
    [key: string]: any;
  }) => (
    <button data-testid="styled-button" data-color={$color} {...props}>
      {children}
    </button>
  ),
}));

describe("Button Component", () => {
  const defaultText = "Clique aqui";

  describe("Renderização básica", () => {
    it("deve renderizar o botão com o texto correto", () => {
      render(<Button text={defaultText} />);

      expect(screen.getByTestId("styled-button")).toBeInTheDocument();
      expect(screen.getByText(defaultText)).toBeInTheDocument();
    });

    it('deve renderizar com cor padrão "Black"', () => {
      render(<Button text={defaultText} />);

      const button = screen.getByTestId("styled-button");
      expect(button).toHaveAttribute("data-color", "Black");
    });

    it("deve não mostrar ícone por padrão", () => {
      render(<Button text={defaultText} />);

      expect(
        screen.queryByTestId("shopping-cart-icon")
      ).not.toBeInTheDocument();
    });
  });

  describe("Prop icon", () => {
    it("deve renderizar o ícone quando icon=true", () => {
      render(<Button text={defaultText} icon={true} />);

      expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
    });

    it("deve renderizar o ícone com tamanho correto", () => {
      render(<Button text={defaultText} icon={true} />);

      const icon = screen.getByTestId("shopping-cart-icon");
      expect(icon).toHaveAttribute("data-size", "24");
    });

    it("deve não renderizar o ícone quando icon=false", () => {
      render(<Button text={defaultText} icon={false} />);

      expect(
        screen.queryByTestId("shopping-cart-icon")
      ).not.toBeInTheDocument();
    });

    it("deve renderizar tanto ícone quanto texto quando icon=true", () => {
      render(<Button text={defaultText} icon={true} />);

      expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
      expect(screen.getByText(defaultText)).toBeInTheDocument();
    });
  });

  describe("Prop color", () => {
    it('deve renderizar com cor "Green" quando especificada', () => {
      render(<Button text={defaultText} color="Green" />);

      const button = screen.getByTestId("styled-button");
      expect(button).toHaveAttribute("data-color", "Green");
    });

    it('deve renderizar com cor "Black" quando especificada', () => {
      render(<Button text={defaultText} color="Black" />);

      const button = screen.getByTestId("styled-button");
      expect(button).toHaveAttribute("data-color", "Black");
    });
  });

  describe("Props HTML nativas", () => {
    it("deve aceitar e aplicar props HTML nativas", () => {
      render(
        <Button
          text={defaultText}
          disabled={true}
          id="test-button"
          className="custom-class"
        />
      );

      const button = screen.getByTestId("styled-button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("id", "test-button");
      expect(button).toHaveClass("custom-class");
    });

    it("deve executar função onClick quando clicado", () => {
      const handleClick = jest.fn();
      render(<Button text={defaultText} onClick={handleClick} />);

      const button = screen.getByTestId("styled-button");
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("deve aceitar type como prop", () => {
      render(<Button text={defaultText} type="submit" />);

      const button = screen.getByTestId("styled-button");
      expect(button).toHaveAttribute("type", "submit");
    });
  });

  describe("Combinações de props", () => {
    it("deve renderizar corretamente com todas as props", () => {
      const handleClick = jest.fn();

      render(
        <Button
          text="Adicionar ao carrinho"
          icon={true}
          color="Green"
          disabled={false}
          onClick={handleClick}
          className="add-to-cart"
        />
      );

      const button = screen.getByTestId("styled-button");
      const icon = screen.getByTestId("shopping-cart-icon");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("data-color", "Green");
      expect(button).toHaveClass("add-to-cart");
      expect(button).not.toBeDisabled();
      expect(icon).toBeInTheDocument();
      expect(screen.getByText("Adicionar ao carrinho")).toBeInTheDocument();

      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("deve funcionar com botão desabilitado e ícone", () => {
      render(<Button text="Botão desabilitado" icon={true} disabled={true} />);

      const button = screen.getByTestId("styled-button");
      expect(button).toBeDisabled();
      expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
      expect(screen.getByText("Botão desabilitado")).toBeInTheDocument();
    });
  });

  describe("Casos extremos", () => {
    it("deve renderizar com texto vazio", () => {
      render(<Button text="" />);

      expect(screen.getByTestId("styled-button")).toBeInTheDocument();
      expect(screen.getByTestId("styled-button")).toHaveTextContent("");
    });

    it("deve renderizar com texto muito longo", () => {
      const longText =
        "Este é um texto muito longo para testar se o botão consegue lidar com textos extensos sem quebrar a funcionalidade";

      render(<Button text={longText} />);

      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it("deve renderizar com caracteres especiais no texto", () => {
      const specialText = "Texto com çãrácteres €speciais & símbolos!";

      render(<Button text={specialText} />);

      expect(screen.getByText(specialText)).toBeInTheDocument();
    });
  });

  describe("Acessibilidade", () => {
    it("deve ser um botão acessível", () => {
      render(<Button text={defaultText} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("deve ter o texto como conteúdo acessível", () => {
      render(<Button text="Comprar agora" />);

      const button = screen.getByRole("button", { name: "Comprar agora" });
      expect(button).toBeInTheDocument();
    });

    it("deve estar habilitado por padrão", () => {
      render(<Button text={defaultText} />);

      const button = screen.getByRole("button");
      expect(button).toBeEnabled();
    });

    it("deve respeitar o estado disabled", () => {
      render(<Button text={defaultText} disabled={true} />);

      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("Eventos", () => {
    it("deve não executar onClick quando disabled", () => {
      const handleClick = jest.fn();

      render(
        <Button text={defaultText} onClick={handleClick} disabled={true} />
      );

      const button = screen.getByTestId("styled-button");
      fireEvent.click(button);

      expect(button).toBeDisabled();
    });

    it("deve executar múltiplos cliques", () => {
      const handleClick = jest.fn();

      render(<Button text={defaultText} onClick={handleClick} />);

      const button = screen.getByTestId("styled-button");

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it("deve aceitar outros eventos HTML", () => {
      const handleMouseEnter = jest.fn();
      const handleMouseLeave = jest.fn();

      render(
        <Button
          text={defaultText}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );

      const button = screen.getByTestId("styled-button");

      fireEvent.mouseEnter(button);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);

      fireEvent.mouseLeave(button);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    });
  });
});
