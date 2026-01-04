# -------- BUILD STAGE --------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy csproj and restore
COPY src/*.csproj ./
RUN dotnet restore ./Project-X-API.csproj

# copy everything else
COPY src/ ./

# publish (self-contained NOT needed)
RUN dotnet publish ./Project-X-API.csproj -c Release -o /app/publish /p:UseAppHost=false


# -------- RUNTIME STAGE --------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "Project-X-API.dll"]
