USE [master]
GO
/****** Object:  Database [TwitappDb]    Script Date: 7/23/2022 2:17:17 PM ******/
CREATE DATABASE [TwitappDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TwitappDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TwitappDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TwitappDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TwitappDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [TwitappDb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TwitappDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TwitappDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TwitappDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TwitappDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TwitappDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TwitappDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [TwitappDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TwitappDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TwitappDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TwitappDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TwitappDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TwitappDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TwitappDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TwitappDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TwitappDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TwitappDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TwitappDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TwitappDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TwitappDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TwitappDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TwitappDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TwitappDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TwitappDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TwitappDb] SET RECOVERY FULL 
GO
ALTER DATABASE [TwitappDb] SET  MULTI_USER 
GO
ALTER DATABASE [TwitappDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TwitappDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TwitappDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TwitappDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TwitappDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TwitappDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'TwitappDb', N'ON'
GO
ALTER DATABASE [TwitappDb] SET QUERY_STORE = OFF
GO
USE [TwitappDb]
GO
/****** Object:  Table [dbo].[TblLogin]    Script Date: 7/23/2022 2:17:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblLogin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[LoginId] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NULL,
	[ConfirmPassword] [nvarchar](100) NULL,
	[ContactNumber] [numeric](10, 0) NULL,
 CONSTRAINT [PK_TblLogin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblTweet]    Script Date: 7/23/2022 2:17:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblTweet](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AuthorName] [nvarchar](100) NULL,
	[AuthorLogo] [nvarchar](100) NULL,
	[AuthorSlug] [nvarchar](100) NULL,
	[TweetTime] [nvarchar](100) NULL,
	[TweetDescription] [nvarchar](100) NULL,
	[TweetImage] [nvarchar](100) NULL,
 CONSTRAINT [PK_TblTweet] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TblLogin] ON 

INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (1, N'Amruta', N'Musale', N'amrutamusale.16@gmail.com', N'amrutamusale', N'123456', N'123456', CAST(8378093889 AS Numeric(10, 0)))
INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (12, N'Pragati ', N'Tanpure', N'pragati@gmail.com', N'pragatiT', N'1234567', N'1234567', CAST(8888888888 AS Numeric(10, 0)))
INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (13, N'Tanu', N'Srivastava', N'tanu12@gmail.com', N'tanu12', N'123456', N'123456', CAST(8888444488 AS Numeric(10, 0)))
INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (14, N'Trupti', N'Lamkane', N'trupti@gmail.com', N'trupti', N'123456', N'123456', CAST(9999988888 AS Numeric(10, 0)))
INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (15, N'Tejasvi', N'Bais', N'tejasvib@gmail.com', N'tejasvibais', N'123456', N'123456', CAST(8282828282 AS Numeric(10, 0)))
INSERT [dbo].[TblLogin] ([Id], [FirstName], [LastName], [Email], [LoginId], [Password], [ConfirmPassword], [ContactNumber]) VALUES (21, N'Strange', N'Stranger', N'strange@unknown.com', N'strnage16', N'161616', N'161616', CAST(8888844444 AS Numeric(10, 0)))
SET IDENTITY_INSERT [dbo].[TblLogin] OFF
GO
SET IDENTITY_INSERT [dbo].[TblTweet] ON 

INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (1, N'Narendra Modi', N'PM.jpg', N'@narendramodi', N'38m ago', N'Birthday wishes to Mizoram CM Shri Zoramthanga Ji.I pray for his long and healthy life', N'PM.jpg')
INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (2, N'Jamyang Tsering Namgyal', N'jyamyang.jpg', N'@jtnladakh', N'1h ago', N'New India 🇮🇳   @Narendramodi    @BJP4INDIA', N'img.jfif')
INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (3, N'NASA Webb telescope', N'nasa-logo.jpg', N'@NASAWebb', N'15h ago', N' Hey
            @NASASolarSystem
            , ready for your close-up? As part of Webb', N'nasa.jfif')
INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (4, N'Suresh Raina', N'Suresh.jpg', N'@ImRaina', N'24h ago', N'पवित्र श्रावण मास के प्रथम सोमवार की हार्दिक शुभकामनाएँ।', N'suresh1.jpeg')
INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (5, N'Virat Kohli', N'virat.png', N'@imVkohli', N'2d', N'Perspective', N'viratk.jpeg')
INSERT [dbo].[TblTweet] ([ID], [AuthorName], [AuthorLogo], [AuthorSlug], [TweetTime], [TweetDescription], [TweetImage]) VALUES (6, N'', N'', N'', N'', N'', N'')
SET IDENTITY_INSERT [dbo].[TblTweet] OFF
GO
USE [master]
GO
ALTER DATABASE [TwitappDb] SET  READ_WRITE 
GO
