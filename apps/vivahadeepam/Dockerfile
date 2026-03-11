FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
RUN useradd -m appuser
COPY publish/ .
RUN mkdir -p /app/data && chown -R appuser:appuser /app
USER appuser
ENV ASPNETCORE_URLS=http://+:5003
ENV ASPNETCORE_ENVIRONMENT=Production
EXPOSE 5003
ENTRYPOINT ["dotnet", "VivahaSevai.dll"]

