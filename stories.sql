-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 07:31 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stories`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_st`
--

CREATE TABLE `admin_st` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `admin_st`
--

INSERT INTO `admin_st` (`id`, `user_name`, `password`, `email`) VALUES
(2, 'StoryAdmin', '1223456', 'michal@test.com');

-- --------------------------------------------------------

--
-- Table structure for table `charcontrol`
--

CREATE TABLE `charcontrol` (
  `id` int(11) NOT NULL,
  `s_a` int(6) NOT NULL,
  `s_b` int(6) NOT NULL,
  `s_c` int(6) NOT NULL,
  `s_e` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `charcontrol`
--

INSERT INTO `charcontrol` (`id`, `s_a`, `s_b`, `s_c`, `s_e`) VALUES
(1, 100, 102, 97, 163);

-- --------------------------------------------------------

--
-- Table structure for table `t645d295940f12`
--

CREATE TABLE `t645d295940f12` (
  `id` int(11) NOT NULL,
  `page_no` int(11) NOT NULL,
  `sec_a` varchar(1000) NOT NULL,
  `sec_b` varchar(500) NOT NULL,
  `sec_c` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `t645d295940f12`
--

INSERT INTO `t645d295940f12` (`id`, `page_no`, `sec_a`, `sec_b`, `sec_c`) VALUES
(1, 1, 'ami tumari', 'premo vikhari', 'valovese tai dio'),
(2, 2, 'zodi ba', 'kokono', 'hoy zodi vul go'),
(3, 3, 'yut', 'jhyrr', 'fhuyg'),
(4, 4, 'uweww', '21kljkljk', 'dfgndfhdf'),
(5, 5, 'u25', 'oi97i', 'ghy6754f'),
(6, 6, 'vbnvbnvb', 'vbnvbn', 'vbnvbn'),
(7, 7, 'tyr6', 'enrtyty', 'vbnnrtyrnthrvbn'),
(8, 8, 'drgbdrfg', 'dfgdfgfg', 'dfbgdfg'),
(9, 9, 'dfgdfgbdfgbd', 'dfgbdfgbd', 'dfgbdfgbdfg'),
(10, 10, 'drgbdrfg', 'dfgdfgfg', 'dfbgdfg'),
(11, 11, 'ekhon ami koto pai', 'dfgbdfgbd', 'dfgbdfgbdfg'),
(12, 12, 'hfgsdfgb', 'dfgbxdgfbd', 'dfgbdsfgbsdfg'),
(13, 13, 'fghyrdty', 'dnfghndfgh', 'fghnfghndf'),
(14, 14, 'hfgsdfgb', 'dfgbxdgfbd', 'dfgbdsfgbsdfg'),
(15, 15, 'fghyrdty', 'dnfghndfgh', 'fghnfghndf'),
(16, 16, 'ftyjertydjnrm  srtynrth sretynsrth', 'srth rthsrth rt rty rty', 'cbndrtyn sdfbadrtasfdg '),
(17, 17, 'ghndt srthdrf sh srf ', 'dgsrtu,serhrg wertn aefv xf', 'drtsdfv fhjkjnggyufty srtyndgh'),
(18, 18, 'ftyjertydjnrm  srtynrth sretynsrth', 'srth rthsrth rt rty rty', 'cbndrtyn sdfbadrtasfdg '),
(19, 19, 'ghndt srthdrf sh srf ', 'dgsrtu,serhrg wertn aefv xf', 'drtsdfv fhjkjnggyufty srtyndgh'),
(20, 20, 'tuyif hytj', 'sdrjmdfg h sdhmdghbz dfgdfg', 'fyjmf ghtyu dtkcvnjkb nnhj'),
(21, 21, 'cbn cvbn', 'cbn cvbn', 'cbn cvbn ');

-- --------------------------------------------------------

--
-- Table structure for table `t645fa973b4500`
--

CREATE TABLE `t645fa973b4500` (
  `id` int(11) NOT NULL,
  `page_no` int(11) NOT NULL,
  `sec_a` varchar(1000) NOT NULL,
  `sec_b` varchar(500) NOT NULL,
  `sec_c` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `t645fa973b4500`
--

INSERT INTO `t645fa973b4500` (`id`, `page_no`, `sec_a`, `sec_b`, `sec_c`) VALUES
(1, 1, '88888888', 'asdf', 'asdfasdf'),
(2, 2, 'wrtwhert', 'wertwertertert', 'wertwertwert'),
(3, 5, 'ertyjerty', 'ertyjert', 'yertyjertyrt'),
(4, 11, 'fhmjdm fghs dfghsrfh', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `t646b0b58120ed`
--

CREATE TABLE `t646b0b58120ed` (
  `id` int(11) NOT NULL,
  `page_no` int(11) NOT NULL,
  `sec_a` varchar(1000) NOT NULL,
  `sec_b` varchar(500) NOT NULL,
  `sec_c` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `t646b0b58120ed`
--

INSERT INTO `t646b0b58120ed` (`id`, `page_no`, `sec_a`, `sec_b`, `sec_c`) VALUES
(1, 1, 'dgfhdfh', 'dfhdfh', 'fhdfhdfhg'),
(2, 3, 'egbergfberg', 'ergber', 'ertbertebrtertbert'),
(3, 2, 'ertberte', 'ertbert', 'ertbertert'),
(4, 5, 'ebrgbert', 'rtbert', 'ertbertbe'),
(5, 10, '555555', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `t6468be089efd6`
--

CREATE TABLE `t6468be089efd6` (
  `id` int(11) NOT NULL,
  `page_no` int(11) NOT NULL,
  `sec_a` varchar(1000) NOT NULL,
  `sec_b` varchar(500) NOT NULL,
  `sec_c` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `t6468be089efd6`
--

INSERT INTO `t6468be089efd6` (`id`, `page_no`, `sec_a`, `sec_b`, `sec_c`) VALUES
(1, 1, 'tyu', 'yu', 'ryu'),
(2, 2, 'page number 2', 'page number 2', 'page number 2'),
(3, 4, 'page number 4', 'page number 4', 'page number 4'),
(4, 5, 'hfhfnghfghnfg', 'hnfghn', 'fghnfghnfgh'),
(5, 11, 'rthgnrtfh', 'fghnrthnr', 'rthnrthnyrtynrty'),
(6, 19, 'wn4ntrgnwrtshgbsdfgbsdfgh', '', ''),
(7, 18, 'ertyherty', 'drtyhdrty', 'hrtyhdrty'),
(8, 27, 'srthnsrthgnsberthsergser', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `teacher_name` varchar(400) NOT NULL,
  `teacher_pass` varchar(255) NOT NULL,
  `tablename` varchar(255) NOT NULL,
  `template` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `teacher_name`, `teacher_pass`, `tablename`, `template`) VALUES
(7, 'test2', '123456', 't645d295940f12', 21),
(11, 'Jessy', '123456', 't645fa973b4500', 21),
(13, 'FJ', '123456', 't6468be089efd6', 41),
(14, 'fj2', '123456', 't646b0b58120ed', 61);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_st`
--
ALTER TABLE `admin_st`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `charcontrol`
--
ALTER TABLE `charcontrol`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t645d295940f12`
--
ALTER TABLE `t645d295940f12`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t645fa973b4500`
--
ALTER TABLE `t645fa973b4500`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t646b0b58120ed`
--
ALTER TABLE `t646b0b58120ed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t6468be089efd6`
--
ALTER TABLE `t6468be089efd6`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_st`
--
ALTER TABLE `admin_st`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `charcontrol`
--
ALTER TABLE `charcontrol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t645d295940f12`
--
ALTER TABLE `t645d295940f12`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `t645fa973b4500`
--
ALTER TABLE `t645fa973b4500`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t646b0b58120ed`
--
ALTER TABLE `t646b0b58120ed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `t6468be089efd6`
--
ALTER TABLE `t6468be089efd6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
