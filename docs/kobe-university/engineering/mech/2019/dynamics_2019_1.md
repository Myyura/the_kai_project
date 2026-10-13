---
sidebar_label: "機械力学 第1問"
tags:
  - Kobe-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 神戸大学 工学研究科 機械工学専攻 2019年度 機械力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半径 $R$、質量 $M$ の一様円板を、右上がりの傾斜角 $\phi$ の斜面上で静止させる。時刻0から中心に一定トルク $T$ を与える。斜面に沿う右向きを並進の正、時計回りを回転の正とする。中心速度を $v$、角速度を $\omega$、慣性モーメントを $I$、上り方向を正とする摩擦力を $f$、重力加速度を $g$ とする。

![斜面上の円板とトルク停止後の二条件](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_dynamics1.svg)

1. 並進・回転の運動方程式を示せ。
2. 滑らずに転がるとし、$I=MR^2/2$ を用いて $v(t)$ と $v>0$ のための $T$ の条件を求めよ。
3. 中心が初期位置から高さ $h_0$ に達したときトルクを停止する。このときの接触点をA、速度を $v_0$ とする。滑らずに転がり続けてさらに上る高さ $h_1$ を求めよ。
4. Aより高い領域だけが摩擦のない斜面である場合、さらに上る高さ $h_2$ を求め、$h_1$ と比較せよ。

#### 题目描述

均匀圆盘半径 $R$、质量 $M$，位于向右上倾角 $\phi$ 的斜面，初静止，施加恒定顺时针力矩 $T$。沿斜面上行为正，顺时针转动为正，摩擦力 $f$ 也以上行为正。（1）写平动及转动方程；（2）无滑动且 $I=MR^2/2$ 时求速度及上行条件；（3）达到高度 $h_0$、速度 $v_0$ 时停力矩，继续纯滚动可再升多高；（4）停力矩点以上无摩擦时可再升多高，并比较。

## **Kai**

### (1)

重力の斜面方向成分は $-Mg\sin\phi$、摩擦による中心回りトルクは時計回り規約で $-fR$。従って


$$
\boxed{M\dot v=f-Mg\sin\phi,\qquad I\dot\omega=T-fR}.
$$


### (2)

滑りなしの拘束 $v=R\omega$ を用いて $f$ を消去すると


$$
\left(M+\frac I{R^2}\right)\dot v=\frac TR-Mg\sin\phi.
$$


$I=MR^2/2$ と $v(0)=0$ より


$$
\boxed{v(t)=\frac{2(T-MgR\sin\phi)}{3MR}t},\qquad
\boxed{T>MgR\sin\phi\quad(t>0)}.
$$


滑らないための摩擦力が確保されることは設問の仮定である。

### (3)

静止摩擦は仕事をしない。最高点で $v=\omega=0$ となるため


$$
Mgh_1=\frac12Mv_0^2+\frac12\frac{MR^2}{2}\left(\frac{v_0}R\right)^2=\frac34Mv_0^2.
$$


従って $\boxed{h_1=3v_0^2/(4g)}$。

### (4)

摩擦がなくトルクも停止しているため、$\omega=v_0/R$ は一定で、回転運動エネルギーは変わらない。並進分だけが位置エネルギーに変わり


$$
Mgh_2=\frac12Mv_0^2,\qquad\boxed{h_2=\frac{v_0^2}{2g}}.
$$


従って $\boxed{h_1=\tfrac32h_2>h_2}$。摩擦なしの場合、最高点でも円板は回転している。

## **Reference**

- [神戸大学公式問題の保存版：平成31年度 機械力学、PDF 1ページ](https://web.archive.org/web/20220524073517id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/5_H31_Machine.pdf)
