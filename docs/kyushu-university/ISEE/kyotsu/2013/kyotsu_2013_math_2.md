---
sidebar_label: "2013年度入学 数学 問2（微分方程式）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2013年度入学 数学 問2（微分方程式）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の微分方程式の一般解を求めよ.なお、 $y'$ は関数 $y(x)$ の $x$ に関する1階導関数を表している。

(1) $y' = \frac{3x + y - 5}{x - 3y - 5}$

(2) $y'' - 2y' - 3y = e^x + e^{3x} + \cos x$

(3) $y'''' - 4y''' + 7y'' - 6y' + 2y = 0$

### 题目描述

求下列三个微分方程的通解，其中 $y'$ 表示函数 $y(x)$ 关于 $x$ 的一阶导数，$y'',y''',y''''$ 依次表示更高阶导数：

1.

   $$
   y'=\frac{3x+y-5}{x-3y-5}.
   $$

2.

   $$
   y''-2y'-3y=e^x+e^{3x}+\cos x.
   $$

3.

   $$
   y''''-4y'''+7y''-6y'+2y=0.
   $$

## **Kai**

### (1) $y' = \frac{3x + y - 5}{x - 3y - 5}$

Let $x = X + h, y = Y + k$ . Then $y' = \frac{dY}{dX}$ .

$\frac{dY}{dX} = \frac{3(X+h) + (Y+k) - 5}{(X+h) - 3(Y+k) - 5} = \frac{3X + Y + 3h + k - 5}{X - 3Y + h - 3k - 5}$

Choose $h$ and $k$ such that $3h + k - 5 = 0$ and $h - 3k - 5 = 0$ .

Solving these equations gives $h = 2, k = -1$ .

So $x = X + 2, y = Y - 1$ .

Then $\frac{dY}{dX} = \frac{3X + Y}{X - 3Y}$ .

Let $Y = vX$ . Then $\frac{dY}{dX} = v + X\frac{dv}{dX}$ .

$v + X\frac{dv}{dX} = \frac{3X + vX}{X - 3vX} = \frac{3 + v}{1 - 3v}$

$X\frac{dv}{dX} = \frac{3 + v}{1 - 3v} - v = \frac{3 + v - v + 3v^2}{1 - 3v} = \frac{3 + 3v^2}{1 - 3v}$

$\frac{1 - 3v}{3 + 3v^2}dv = \frac{dX}{X}$

$\int \frac{1 - 3v}{3(1 + v^2)}dv = \int \frac{dX}{X}$

$\frac{1}{3} \int \frac{1}{1 + v^2}dv - \int \frac{v}{1 + v^2}dv = \ln|X| + C_1$

$\frac{1}{3} \arctan(v) - \frac{1}{2} \ln(1 + v^2) = \ln|X| + C_1$

$\frac{1}{3} \arctan(\frac{Y}{X}) - \frac{1}{2} \ln(1 + (\frac{Y}{X})^2) = \ln|X| + C_1$

$\frac{1}{3} \arctan(\frac{Y}{X}) - \frac{1}{2} \ln(\frac{X^2 + Y^2}{X^2}) = \ln|X| + C_1$

$\frac{1}{3} \arctan(\frac{Y}{X}) - \frac{1}{2} \ln(X^2 + Y^2) + \frac{1}{2} \ln(X^2) = \ln|X| + C_1$

$\frac{1}{3} \arctan(\frac{Y}{X}) - \frac{1}{2} \ln(X^2 + Y^2) + \ln|X| = \ln|X| + C_1$

$\frac{1}{3} \arctan(\frac{Y}{X}) - \frac{1}{2} \ln(X^2 + Y^2) = C_1$

$\frac{1}{3} \arctan(\frac{y+1}{x-2}) - \frac{1}{2} \ln((x-2)^2 + (y+1)^2) = C_1$

### (2) $y'' - 2y' - 3y = e^x + e^{3x} + \cos x$

The homogeneous equation is $y'' - 2y' - 3y = 0$ .

The characteristic equation is $r^2 - 2r - 3 = 0$ .

$(r - 3)(r + 1) = 0$ . So $r = 3, -1$ .

The homogeneous solution is $y_h = c_1 e^{3x} + c_2 e^{-x}$ .

For $e^x$ , try $Ae^x$ . Then $Ae^x - 2Ae^x - 3Ae^x = e^x$ . So $-4A = 1$ , and $A = -\frac{1}{4}$ .

For $e^{3x}$ , try $Bxe^{3x}$ . Then $B(6e^{3x} + 9xe^{3x}) - 2B(e^{3x} + 3xe^{3x}) - 3Bxe^{3x} = e^{3x}$ . So $4B = 1$ , and $B = \frac{1}{4}$ .

For $\cos x$ , try $C\cos x + D\sin x$ . Then $(-C\cos x - D\sin x) - 2(-C\sin x + D\cos x) - 3(C\cos x + D\sin x) = \cos x$ .

$-4C - 2D = 1, 2C - 4D = 0$ . So $C = 2D$ . $-8D - 2D = 1$ . So $D = -\frac{1}{10}$ and $C = -\frac{1}{5}$ .

The general solution is $y = c_1 e^{3x} + c_2 e^{-x} - \frac{1}{4} e^x + \frac{1}{4}xe^{3x} - \frac{1}{5}\cos x - \frac{1}{10} \sin x$ .

### (3) $y'''' - 4y''' + 7y'' - 6y' + 2y = 0$

The characteristic equation is $r^4 - 4r^3 + 7r^2 - 6r + 2 = 0$ .

By inspection, $r = 1$ is a root twice. So $(r-1)^2 = r^2 - 2r + 1$ is a factor.

$(r^4 - 4r^3 + 7r^2 - 6r + 2) \div (r^2 - 2r + 1) = r^2 - 2r + 2$ .

So $r^2 - 2r + 2 = 0$ . $r = \frac{2 \pm \sqrt{4 - 8}}{2} = 1 \pm i$ .

Therefore the general solution is $y = c_1 e^x + c_2 xe^x + c_3 e^x \cos x + c_4 e^x \sin x$ .
