# Use the official .NET 9 SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

#restore any dependencies
COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

# Use the official .NET runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Copy the built application from the build image
COPY --from=build /app/out .

# Expose port 5000
EXPOSE 5000

# Set the entry point to the application
ENTRYPOINT ["dotnet", "API.dll"]
