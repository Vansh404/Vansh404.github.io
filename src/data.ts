//// This is the data for the hero section
export const heroBlurb = {
  profilePicture: null as ImageMetadata | null,
  paragraphs: [
    'I am a graduate student in Electrical and Computer Engineering at the ' +
    '<strong>University of Michigan, Ann Arbor</strong>, working on safe and robust planning and behaviours for autonomous systems.',
    
    'Currently a Graduate Researcher at <strong>ROAHM Lab</strong>, I build trajectory optimization solvers ' +
    'for constrained motion planning in high-DoF  robotic systems. ' +
    'I also hold a B.Tech. in Electrical Engineering from NIT Hamirpur.',
  ]
}

//// This is the data for any social links
import { type Socials } from '@/types'

export const socials: Socials[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Vansh404',
    icon: '<i class="bi bi-github"></i>',
  },
  {
    label: 'Email',
    href: 'mailto:vansht@umich.edu',
    icon: '<i class="bi bi-envelope-fill"></i>',
  },
];

//// This is the data for the research works
import { type ResearchInfo } from '@/types';

export const research: ResearchInfo[] = [];

//// This is the data for the projects
import { type ProjectsList } from '@/types';

export const projectsLists: ProjectsList[] = [
  {
    title: 'Research',
    items: [
    {
      media: [
        { type: 'video', src: '/fire.mp4' },
        { type: 'video', src: '/demo2.mp4' },
        { type: 'video', src: '/solution.mov' },
      ],
      title: 'Rapid Trajectory Optimization for High DoF Systems',
      info: 'ROAHM Lab, University of Michigan — May 2025–Present',
      description:
        'Developed a real-time trajectory optimization system for constrained robotic motion in C++, achieving reliable online planning with strict constraint satisfaction. ' +
        'Deployed on a 7-DoF manipulator with 100% success rate and extended to quadrupeds, leading to an optimization-based whole-body controller for robust contact and stability. ',
      link: 'https://vansh404.github.io/ALMSite/',
    },
    {
      media: [
        { type: 'video', src: '/stabilized_carla.mp4' },
      ],
      title: 'Dual-Layer MPC for Autonomous Vehicles in CARLA',
      info: 'University of Michigan — Jan–Apr 2025',
      description:
        'Developed a real-time MPC-based planning and control system for autonomous driving, replacing PID control to eliminate instability under urban conditions. ' +
        'Achieved reliable, bounded solve times and validated stable closed-loop behavior in CARLA. ' +
        '',
      link: 'https://docs.google.com/presentation/d/18hjz8URtOQ8X7RgI-8fH5L7xRgqbPQmJxaG6vJjWJz4/edit?usp=sharing',
    },
    {
      title: 'Quadcopter Dynamics, LQR, MRAC & Deep MPC',
      info: 'NIT Hamirpur — Aug 2023–Apr 2024',
      description:
        'Developed a robust quadrotor control framework by integrating Model Predictive Control (MPC) with machine learning techniques to handle uncertain dynamics. ' +
        'Analyzed performance trade-offs between traditional and learning-based control approaches, highlighting improvements in adaptability and tracking under uncertainty. ' +
        '',
      link: 'https://drive.google.com/file/d/1kWy6eVL8cjgH0lkG9lznb3_hms-EMkYe/view?usp=sharing',
    },
  ]},
  {
    title: 'Course Projects',
    items: [
    {
      media: [
        { type: 'image-url', src: '/finalTrack.png' },
      ],
      title: 'Multivariable Control for Reactive Ion Etching',
      info: 'EECS 565 — Winter 2025',
      description:
        'Designed optimal multivariable feedback controller to outperform industry-standard SISO loops for UM\'s 3x3 RIE plasma chamber. ' +
        'Used LQR + state integrator + Kalman Filter. Reduced voltage spikes by 87% (0.6 → 0.078), halved RF power, and sped up convergence (47s → 11s). ' +
        'Analytically derived SISO limits and outperformed with a reduced 2x3 MIMO design.',
      link: 'https://github.com/Vansh404/565_FinalProj.git',
    },
    {
      media: [
        { type: 'image-url', src: '/lorenzBase.png' },
      ],
      title: 'Deep Koopman Learning for Chaotic Systems',
      info: 'MECHENG599  Data-Driven Controls — Winter 2025',
      description:
        'Learned dynamics of the chaotic Lorenz system using neural approximations of the Koopman operator. ' +
        'Trained deep autoencoder in PyTorch to project 3D → 15D latent space; learned linear Koopman dynamics in latent space. ' +
        'Achieved testing MSE ≈ 0.4 across 60k samples of chaotic evolution.',
      link: '',
      disabled: true,
    },
    {
      media: [
        { type: 'video', src: '/mbot.mp4' },
      ],
      title: 'ROB 550: Autonomy Stack for MBot',
      info: 'Fall 2024',
      description:
        'Built full autonomy stack for a differential-drive mobile robot using ROS2, SLAM, localization, and motion planning. ' +
        'Implemented occupancy grid mapping from RPLidar data in C++, Monte Carlo Localization with particle filters, ' +
        'and A* path planning for autonomous maze navigation.',
      link: '',
      disabled: true,
    },
    {
      title: 'EECS 461: Embedded ADAS System on NXP S32K144',
      info: 'Fall 2024',
      description:
        'Designed a complete ADAS stack with cruise control and lane keeping using model-based design and embedded C. ' +
        'Built Simulink+C implementation on a physical testbed with haptic steering wheel. ' +
        'Worked with CAN, ISRs, ADCs, and motor encoders.',
      link: '',
      disabled: true,
    },
  ]},
];
