---
sidebar_label: "2019年8月実施 専門 第1問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Circuits.Boost-Converter-Switching-Transient
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2019年8月実施 専門 第1問


## **Author**
[diohabara](https://github.com/diohabara/open_inshi)

## **Description**
図に示す，定電圧電源 (電圧 $E$), スイッチ (記号 $SW$) , ダイオード (記号 $D$), コイル (インダクタンス $L$), コンデンサ (キャパシタンス $C$), 端子で構成される昇圧回路を考える．時刻を $t$ とし，コイルを流れる電流を $i(t)$ , 端子の両端の電圧を $v(t)$ とする (それぞれの方向は図を参照のこと)．また，ダイオードの順方向電圧は無視でき，時刻 $t=0$ で $i(0)=0,v(0)=E$ とする．このとき，以下の問いに答えよ．

(1) $t=0$ から $T_0$ の時間，スイッチを短絡させる． $0 \le t < T_0$ について, $i(t)$ を求めよ．

(2) $t=T_0$ に，スイッチを開放する．スイッチを開放してから $i(t)$ が $0$ に戻るまでの時間を $T_1$ とする．$T_0 \le t < T_0+T_1$ における $i(t)$ を求め, $T_1$ も求めよ．

$t=0$ から，上述の操作 ($T_0$ 時間短絡し，$T_1$ 時間開放させる) を $n$ 回繰り返す．$T_0$ および $T_1$ は定数，$n$ は $1$ 以上の整数とする．

(3) $i(T_0 + T_1) = 0$ならば, $i(n(T_0 + T_1)) = 0$ であることを定性的に説明せよ.

(4) $v(n(T_0 + T_1))$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_1_p1.png" width="480" height="240" alt=""/>
</figure>

### 题目描述

考虑上图所示升压电路，它由电压为 $E$ 的恒压源、开关 $SW$、二极管 $D$、电感为 $L$ 的线圈、电容为 $C$ 的电容器和输出端子组成。以 $t$ 表示时间，$i(t)$ 表示线圈电流，$v(t)$ 表示端子两端电压，方向均按图示；忽略二极管正向压降，并给定

$$
i(0)=0,\qquad v(0)=E.
$$

(1) 从 $t=0$ 起将开关短路 $T_0$ 时间，求 $0\le t<T_0$ 时的 $i(t)$。

(2) 在 $t=T_0$ 时断开开关。把断开后直至 $i(t)$ 恢复为 $0$ 的时间记为 $T_1$，求 $T_0\le t<T_0+T_1$ 时的 $i(t)$，并求 $T_1$。

从 $t=0$ 起，把上述“短路 $T_0$ 时间、断开 $T_1$ 时间”的操作重复 $n$ 次，其中 $T_0,T_1$ 为常数，$n$ 为不小于 $1$ 的整数。

(3) 若 $i(T_0+T_1)=0$，定性说明为何

$$
i\bigl(n(T_0+T_1)\bigr)=0.
$$

(4) 求

$$
v\bigl(n(T_0+T_1)\bigr).
$$

## **Kai**

### (1)

スイッチを短絡するとダイオードは逆バイアスとなり、電源とコイルに対して

$$
L\frac{di}{dt}=E
$$

が成り立つ。$i(0)=0$ より

$$
\boxed{i(t)=\frac ELt\qquad(0\le t<T_0)}.
$$

この間、負荷のないコンデンサの電圧は $v(t)=E$ に保たれる。

### (2)

$u=t-T_0$、$\omega_0=1/\sqrt{LC}$、$I_0=ET_0/L$ とおく。ダイオードが導通している間の回路方程式は

$$
L\frac{di}{du}+v=E,\qquad C\frac{dv}{du}=i,
\qquad i(0)=I_0,\quad v(0)=E.
$$

従って $i''+\omega_0^2i=0$、$i'(0)=0$ なので

$$
\boxed{i(t)=I_0\cos\bigl(\omega_0(t-T_0)\bigr)},\qquad
v(t)=E+I_0\sqrt{\frac LC}\sin\bigl(\omega_0(t-T_0)\bigr).
$$

最初に電流が0となるのは $\omega_0u=\pi/2$ の時であり、

$$
\boxed{T_1=\frac{\pi\sqrt{LC}}2}.
$$

### (3)

各周期の開始時の電流を0、電圧を $v_k\ge E$ とする。短絡区間の終了時には、毎回同じ電流 $I_0=ET_0/L$ が得られる。続く開放区間で、導通中の電流は

$$
i_k(u)=I_0\cos(\omega_0u)
-(v_k-E)\sqrt{\frac CL}\sin(\omega_0u).
$$

$v_k>E$ なら第2項が負なので、最初の零点は $0<u<T_1$ にある。電流が0になるとダイオードが遮断し、残りの開放時間は $i=0$ に保たれる。コンデンサは導通中だけ充電されるので $v_{k+1}\ge v_k\ge E$ である。

初期値 $i(0)=0,v_0=E$ から帰納的に、

$$
\boxed{i\bigl(n(T_0+T_1)\bigr)=0}
$$

がすべての $n\ge1$ で成り立つ。

### (4)

開放区間で電源がした仕事は $E\int i\,dt=EC(v_{k+1}-v_k)$ であり、これが蓄積エネルギーの増加分に等しい。したがって

$$
EC(v_{k+1}-v_k)
=\frac C2(v_{k+1}^2-v_k^2)-\frac L2 I_0^2.
$$

整理すると

$$
(v_{k+1}-E)^2=(v_k-E)^2+\frac LC I_0^2
=(v_k-E)^2+\frac{E^2T_0^2}{LC}.
$$

$v_0=E$ と $v_n\ge E$ より

$$
\boxed{v\bigl(n(T_0+T_1)\bigr)
=E\left(1+T_0\sqrt{\frac n{LC}}\right)}.
$$
