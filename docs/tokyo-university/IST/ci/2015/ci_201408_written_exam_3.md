---
sidebar_label: 2014年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Three-Dimensional-Position-Sensing
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065621id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2014-8-exam.pdf).

### 日本語

3次元空間中のある1点の3次元位置を計測するシステムの例を一つ挙げ、そのシステムに関して以下の事項を説明せよ。システムは、非接触型でも接触型でも、どちらでもよく、計測対象やシステムに何らかの動作条件が必要なものでもよい。

(1) 計測原理の概略、並びに3次元位置を計測するための計算方法

(2) 必要となる主要なハードウェアとソフトウェア、並びにシステムの構成

(3) システムが適切に動作するための主要な条件、並びにその条件が必要な理由

(4) システムの位置精度と時間分解能の限界、並びにそれらの限界を決めている要因

(5) このシステムを用いた応用例（一つ）、並びにその動作原理の概略

### English
Show a system for measuring a three dimensional position of a point in the three dimensional space and explain the following items on the system. The system can be designed on the basis of either contact or non-contact method. Any operating condition on measuring objects and/or the system can be assumed.

(1) The outline of the measurement principle and the calculation method of the system for detecting the three dimensional position

(2) The main hardware/software components of the system and their configuration of the system

(3) Main requirements for appropriate operation of the system and the reasons of their necessity

(4) Limits of position accuracy and time resolution of the system and the factors in determining them

(5) An application example using the system and outline of its operating principle

### 题目描述

任选一种测量三维空间中某一点三维位置的系统，并围绕该系统回答下列问题。系统可以是非接触式或接触式，也可以要求被测对象或系统满足某些运动、工作条件。

1. 概述测量原理，以及由观测量计算三维位置的方法。
2. 说明所需的主要硬件、软件及整体系统构成。
3. 说明系统正确工作必须满足的主要条件，以及这些条件必要的原因。
4. 说明位置精度与时间分辨率的极限，并分析决定这些极限的因素。
5. 举出一个使用该系统的应用，并概述该应用的工作原理。


## **Kai**

Choose a calibrated, synchronized **stereo-camera system** that measures a visible marker's three-dimensional position by triangulation. This is a non-contact example. The following assumptions and limits refer to this chosen system.

### (1) Principle and calculation

After distortion correction and stereo rectification, let the two virtual cameras have parallel optical axes, a horizontal baseline $B>0$, a common focal length $f$ in pixels and common principal point $(c_x,c_y)$. Use the left camera as the coordinate frame and put the right camera center at $(B,0,0)$. For a point $(X,Y,Z)$ in front of both cameras,

$$
u_L-c_x=f\frac XZ,\qquad
u_R-c_x=f\frac{X-B}{Z},\qquad
v_L-c_y=f\frac YZ.
$$

The disparity $d=u_L-u_R=fB/Z$ gives

$$
\boxed{Z=\frac{fB}{d},\qquad X=\frac{(u_L-c_x)Z}{f},\qquad
Y=\frac{(v_L-c_y)Z}{f}.}
$$

The corresponding rectified image points should satisfy $v_L\simeq v_R$. For a general calibrated camera pair, use its projection matrices to triangulate the two viewing rays, or minimize reprojection error. Transform the reconstructed point to a robot/world frame using the calibrated rigid transform. Calibration, rectification and triangulation are covered in the [OpenCV camera-geometry documentation](https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html).

### (2) Hardware, software and configuration

Use two cameras with suitable lenses, a rigid mounting bar, synchronized triggering, image acquisition interfaces, a computer and a visible marker or sufficiently textured target. A calibration target supplies known geometry to estimate camera intrinsics, lens distortion and relative pose.

```text
marker ──> left camera  ──┐
                         ├─ acquisition/undistortion/rectification
marker ──> right camera ──┘          │
common trigger ──> both cameras      v
                            marker correspondence
                                    │
                                    v
                              triangulation
                                    │
                                    v
                         world-frame position + quality
```

Software detects the same marker in both images, estimates its image location (possibly to subpixel precision), validates the match, performs triangulation and reports position with confidence or residual checks. Time stamps and calibrated camera parameters must correspond to the acquired image pair.

### (3) Conditions for correct operation

The target must be visible in both fields of view and identifiable unambiguously, because pairing unrelated image points reconstructs the wrong rays. Adequate lighting, focus and image contrast are needed for reliable localization. The baseline must be nonzero and the viewing rays sufficiently separated for a well-conditioned intersection; very small disparity makes depth uncertain. The cameras must remain rigidly fixed after calibration, and lens distortion must be accounted for. For moving objects, exposure timing must be synchronized and motion blur sufficiently small, so the two measurements represent approximately the same physical position. Occlusion, reflective surfaces and repetitive texture can invalidate correspondence even if the triangulation equations themselves are correct.

### (4) Accuracy and time resolution

For small disparity uncertainty $\sigma_d$, first-order propagation through $Z=fB/d$ gives

$$
\boxed{\sigma_Z\approx\left|\frac{\partial Z}{\partial d}\right|\sigma_d
=\frac{fB}{d^2}\sigma_d=\frac{Z^2}{fB}\sigma_d.}
$$

Depth uncertainty thus grows quadratically with range for a fixed baseline, focal length and disparity uncertainty. Baseline calibration, focal calibration, pixel localization, distortion residuals, synchronization error and mechanical drift also contribute; the displayed expression accounts only for disparity error. For illustration, $B=0.2\,\mathrm m$, $f=1000$ pixels, $Z=2\,\mathrm m$ and $\sigma_d=0.1$ pixel give $\sigma_Z\approx0.002\,\mathrm m$. This is an example calculation, not a guaranteed device specification.

The frame rate limits the spacing between position samples: 60 frames/second gives about 16.7 ms between samples. Exposure duration limits how precisely a moving target is localized within each sample, while acquisition, transfer and processing add output latency. These are distinct quantities; subpixel spatial localization does not imply sub-frame temporal resolution. No universal numerical accuracy or frame-rate limit follows without choosing actual hardware and conditions.

### (5) Example application

In robot pick-and-place, attach or detect a distinctive marker on an object. Obtain its stereo position, transform it from the camera frame to the calibrated robot-base frame, and command a reachable approach trajectory that avoids obstacles. Repeated measurements can update the target before grasping, provided tracking latency and object motion are within the controller's tolerance. A single measured point supplies position only: either assume a known grasp orientation or use multiple noncollinear markers/features to estimate the object's full pose before setting the gripper orientation.
