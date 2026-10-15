---
sidebar_label: "2013年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2013年度 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

線密度 $\rho$、長さ $l$ の一様弦が、常に一定の張力 $T$ で二つの壁の間に張られている。左端を $x=0$、横変位を $u(x,t)$ とする。（50 点）

![固定壁の間の弦（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/dynamics-3-original.png)

1. 運動方程式を導出せよ。
2. 前進波 $u=f(x-ct)$ を考え、波速 $c$ を求めよ。
3. 固定端条件での $r$ 次固有角振動数 $\omega_r$ とモード $X_r(x)$ を求めよ。
4. 左右の壁がそれぞれ $a\cos\Omega t,b\sin\Omega t$ で動くとき、定常振動解を求めよ。

![位相の異なる両端加振（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/dynamics-3-excitation.png)

#### 题目描述

均匀弦两端固定，先求横振动方程、行波速度及固有模态。随后使左右端分别作余弦、正弦位移激励，求谐波稳态响应。

## **Kai**

### (1)

微小区間の横方向合力は $T u_{xx}\,dx$、質量は $\rho\,dx$ なので

$$
\boxed{\rho u_{tt}=T u_{xx}.}
$$

### (2)

$u_{tt}=c^2f''$、$u_{xx}=f''$ より

$$
\boxed{c=\sqrt{T/\rho}.}
$$

### (3)

$X''+(\omega/c)^2X=0$ に $X(0)=X(l)=0$ を課すと

$$
\boxed{\omega_r=\frac{r\pi c}{l},\qquad
X_r(x)\propto\sin\frac{r\pi x}{l},\qquad r=1,2,\ldots.}
$$

### (4)

$q=\Omega/c$ とし、両端の加振を重ね合わせる。$\sin ql\ne0$ のとき

$$
\boxed{u(x,t)=a\frac{\sin[q(l-x)]}{\sin ql}\cos\Omega t
+b\frac{\sin(qx)}{\sin ql}\sin\Omega t.}
$$

各項は波動方程式を満たし、左右端ではそれぞれ指定の変位になる。$\Omega=r\pi c/l$ では共振し、$a,b$ の少なくとも一方が非零なら、有界な調和定常解は存在しない。
